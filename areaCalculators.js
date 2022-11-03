function calculateRectangleArea (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  return length * width;
}

function calculateTriangleArea (base, height) {
  if (base < 0 || height < 0) {
    return undefined
  }
  return base * height * 0.5;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined
  }
  return radius * Math.PI
}

calculateRectangleArea(10, 5);
calculateRectangleArea(1.5, 2.5);
calculateRectangleArea(10, -5);
calculateRectangleArea(-1, 0);

calculateTriangleArea(10, 5);
calculateTriangleArea(3, 2.5);
calculateTriangleArea(10, -5);

calculateCircleArea(10);
calculateCircleArea(3.5);
calculateCircleArea(-1);