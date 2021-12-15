interface IRepository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: ILicense | null;
  starred?: boolean;
  language: string;
  data?: object;
}

interface IRepositoryList {
  items: IRepository[];
}

interface RepositoryContext {
  repositories: Repository[];
  setRepositories: (repository?: Repository) => void;
  urlEnding: string;
  setUrlEnding: (url: string) => void;
  addRepository: (repository?: Repository) => void;
  addAllUserRepositories: (repository?: Repository) => void;
}
