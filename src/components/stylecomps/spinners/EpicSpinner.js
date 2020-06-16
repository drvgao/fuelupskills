import React from "react";
import {
  AtomSpinner,
  BreedingRhombusSpinner,
  FingerprintSpinner,
} from "react-epic-spinners";
import Container from "../Container";

const EpicSpinner = () => {
  return (
    <Container>
      <FingerprintSpinner
        color="tomato"
        size="300"
        style={{ align: "center" }}
      ></FingerprintSpinner>
    </Container>
  );
};

export default EpicSpinner;

// AtomSpinner
// BreedingRhombusSpinner
// CirclesToRhombusesSpinner
// FingerprintSpinner
// FlowerSpinner
// FulfillingBouncingCircleSpinner
// FulfillingSquareSpinner
// HalfCircleSpinner
// HollowDotsSpinner
// IntersectingCirclesSpinner
// LoopingRhombusesSpinner
// OrbitSpinner
// PixelSpinner
// RadarSpinner
// ScalingSquaresSpinner
// SelfBuildingSquareSpinner
// SemipolarSpinner
// SpringSpinner
// SwappingSquaresSpinner
// TrinityRingsSpinner
