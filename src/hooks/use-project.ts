import { api } from '@/trpc/react';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

const UseProject = () => {
  const { data: projects, isLoading } = api.project.getProjects.useQuery();
  const [projectId, setProjectId] = useLocalStorage('githubai', '');

  const project = projects?.find((p) => p.id === projectId) ?? projects?.[0];

  useEffect(() => {
    if (projects && projects.length > 0) {
      if (!projectId || !projects.some((p) => p.id === projectId)) {
        setProjectId(projects[0]!.id);
      }
    }
  }, [projects, projectId, setProjectId]);

  return {
    projects,
    project,
    projectId: project?.id ?? '',
    setProjectId,
    isLoading,
  };
};

export default UseProject;