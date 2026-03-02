import { Composition } from 'remotion';
import { MainComposition } from './Main';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={MainComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoUrl: '',
          text: 'AI Edited Video',
        }}
      />
    </>
  );
};
