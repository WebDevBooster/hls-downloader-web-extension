import { IFS } from "../services";

export const createBucketFactory = (fs: IFS) => {
  const run = async (bucketID: string, length: number): Promise<void> => {
    fs.createBucket(bucketID, length);
  };
  return run;
};
