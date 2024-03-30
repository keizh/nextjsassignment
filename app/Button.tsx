"use client";

import React from "react";

interface But {
  classnames: string;
  innerContent: string;
}

export default function Button({ classnames, innerContent }: But) {
  return <button className={`${classnames}`}>{innerContent}</button>;
}
