import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Chart = forwardRef(function Chart(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </SvgIcon>
  );
});

export default Chart;
