import { db } from "@/server/db"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
  apiVersion : '2025-04-30.basil'
})


export async function POST(request:Request){
  const body = await request.text()
  const signature = (await headers()).get('Stripe-Signature') as string
  let event : Stripe.event

  try{
    event = stripe.webhooks.constructEvent(body , signature , process.env.STRIPE_WEBHOOK_SECRET!)
  }
  catch(error){
    return NextResponse.json({ error: 'Invalid signature'} , {status : 400})
  }

  const session = event.data.object as Stripe.Checkout.Session
  console.log(event.type)

  if(event.type === 'checkout.session.completed') {
    const credits = Number(session.metadata?.['credits'])
    const userId = session.client_reference_id
    if(!userId || !credits) {
      return NextResponse.json({
         error: 'Missing userId or credits' } , {status :400})
      }

      await db.razorpayTransaction.create({data:{userId ,credits}})
      await db.user.update({ where : {id:userId} , data:{credits :{
        
      }}})
    }
  }

}