import { ReactElement } from 'react';

interface PortalProps {
  children: ReactElement;
  parentId?: string;
}

export default function Portal(props: PortalProps): JSX.Element;
