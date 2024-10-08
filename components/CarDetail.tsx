import React from "react";

import { CarProps } from "@/types";

interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetail = ({ isOpen, closeModal, car }: CarDetailProps) => {
  return <div>CarDetail</div>;
};

export default CarDetail;
