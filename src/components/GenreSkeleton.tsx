import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card direction='row' height="40px" overflow="hidden">
      <Skeleton width='40px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;
