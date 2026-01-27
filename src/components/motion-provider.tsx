"use client";

import { motion, MotionProps, useScroll } from "framer-motion";
import { HTMLAttributes } from "react";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;
export const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />;
