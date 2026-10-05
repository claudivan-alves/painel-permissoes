export interface PermissionOption {
  id: string;
  name: string;
  description: string;
}

export interface SystemItem {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  permissions: PermissionOption[];
}

export interface UserOption {
  id: string;
  name: string;
  email: string;
  role: string;
}
