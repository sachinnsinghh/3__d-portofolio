import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";

export const SectionHead = ({ subText, headText }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>{subText}</p>
      <h2 className={`${styles.sectionHeadText}`}>{headText}</h2>
    </motion.div>
  );
};
