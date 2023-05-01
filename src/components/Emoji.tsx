import { Image, ImageProps } from '@chakra-ui/react';

import bullsEye from '@assets/bulls-eye.webp';
import thumbsUp from '@assets/thumbs-up.webp';
import meh from '@assets/meh.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: 25 },
    4: { src: thumbsUp, alt: 'recommended', boxSize: 25 },
    5: { src: bullsEye, alt: 'exceptional', boxSize: 30 },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
