export interface SendItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface SendProps {
  data?: SendItemProps[];
}
