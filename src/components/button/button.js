import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const getRel = props => {
  if (props.target === '_blank') {
    return (props.rel || '') + ' noopener noreferrer'
  }

  return props.rel
}

const Button = props => {
  const Component = props.to ? Link : props.href ? 'a' : 'button'
  const rel = getRel(props)
  const type = Component === 'button' ? props.type || 'button' : undefined
  const className = [
    props.className,
    props.theme === 'LINK' ? 'link' : styles.button,
    (props.outline && styles.outline) 
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component {...props} rel={rel} type={type} className={className}>
      {props.icon && (
        <span className={styles.buttonIcon}>
          {props.icon}
        </span>
      )}
      {props.children}
    </Component>
  )
}

export default Button;
