import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { TextInput } from "@repo/ui/text-input";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

<TextInput placeholder="Enter text..." value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
  throw new Error("Function not implemented.");
} } />;