import { useEffect, useRef, useState } from 'react';
import { IconUtils } from '../utils/icon-utils/icon-utils';
import { AVATAR_RESOLUTION_MULTIPLIER } from '../@types/constants';

export const useAvatar = (seed: string, size: number = 100) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));

  useEffect(() => {
    const highResSize = size * AVATAR_RESOLUTION_MULTIPLIER ;
    const options = IconUtils.buildOptions({ seed, size: highResSize });
    const canvas = canvasRef.current;
    IconUtils.renderIcon(options, canvas);
    setAvatarUrl(canvas.toDataURL());
  }, [seed, size]);

  return avatarUrl;
};
