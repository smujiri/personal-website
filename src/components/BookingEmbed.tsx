import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface Props {
  calLink?: string;
  calOrigin?: string;
}

export default function BookingEmbed({
  calLink = 'mujiri',
  calOrigin = 'https://cal.eu',
}: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: 'booking',
        embedJsUrl: `${calOrigin}/embed/embed.js`,
      });
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#C4A84B' } },
        hideEventTypeDetails: false,
      });
    })();
  }, [calOrigin]);

  return (
    <Cal
      namespace="booking"
      calLink={calLink}
      calOrigin={calOrigin}
      style={{ width: '100%', height: '100%', minHeight: '650px', overflow: 'scroll' }}
    />
  );
}
