import React from 'react';
import { Stack, Skeleton, useColorModeValue } from '@chakra-ui/react';
import { Presets } from 'react-component-transition';

const LoadingSkeleton = () => {
  const SkeletonStartColor = useColorModeValue('#3B82F6', 'orange.200');
  const SkeletonEndColor = useColorModeValue('gray.700', 'orange.500');
  return (
    <Presets.TransitionFade>
      <Stack>
        <Skeleton height="9px" mt="4" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" mb="1" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
        <Skeleton height="9px" w="80%" mb="3" startColor={SkeletonStartColor} endColor={SkeletonEndColor} />
      </Stack>
    </Presets.TransitionFade>
  );
};

export default LoadingSkeleton;
