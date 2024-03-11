export interface Project {
  id: string;
  project_name: string;
}

export interface Issue {
  id: string;
  issue_priority: string;
  issue_status: string;
  issue_key: string;
  issue_parent_name: string;
  issue_summary: string;
  jira_project: number;
  issue_updated: string;
  issue_type: string;
  total_returns: number;
  evaluations: any[];
  jira_url: string;
}
