import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.less"; //已启用 CSS Modules

const SvgIcon = props => {
  const { iconName, fill, className } = props;

  return (
    <svg aria-hidden="true" className={className}>
      <use xlinkHref={"#icon-" + iconName} fill={fill} />
    </svg>
  );
};

SvgIcon.propTypes = {
  // svg名字
  iconName: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string
};

SvgIcon.defaultProps = {
  fill: "currentColor",
  className: styles["svg-class"]
};

export default SvgIcon;
