/**
 * This class creates fields and methods for a triangle
 * to show the user vital information about the shape.
 *
 * By:      mohammed al-essawi
 * Version: 1.0
 * Since:   2022-11-03
 */

class Triangle {
  // declares all variables
  private readonly sideA: number
  private readonly sideB: number
  private readonly sideC: number

  // Triangle Constructor
  constructor (sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  // returns current sideA value
  getSideA (): number {
    return this.sideA
  }

  // returns current sideB value
  getSideB (): number {
    return this.sideB
  }

  // returns current sideC value
  getSideC (): number {
    return this.sideC
  }

  // checks if triangle parameters make sense
  isValid (): boolean {
    if (
      this.sideA + this.sideB > this.sideC &&
      this.sideB + this.sideC > this.sideA &&
      this.sideC + this.sideA > this.sideB
    ) {
      return true
    } else {
      return false
    }
  }

  // adds sides together
  private getPerimeter (): number {
    return this.sideA + this.sideB + this.sideC
  }

  // returns half the perimeter
  semiPerimeter (): number {
    return this.getPerimeter() / 2
  }

  // calculates and returns the area
  area (): number {
    return Math.sqrt(
      this.semiPerimeter() *
        (this.semiPerimeter() - this.sideA) *
        (this.semiPerimeter() - this.sideB) *
        (this.semiPerimeter() - this.sideC)
    )
  }

  // finds the type of triangle (scalene, right, etc)
  getType (): string {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return 'Equilateral'
    } else if (
      this.sideA ** 2 + this.sideB ** 2 === this.sideC ** 2 ||
      this.sideC ** 2 + this.sideA ** 2 === this.sideB ** 2 ||
      this.sideB ** 2 + this.sideC ** 2 === this.sideA ** 2
    ) {
      return 'Right Angle'
    } else if (
      (this.sideA === this.sideB && this.sideA !== this.sideC) ||
      (this.sideB === this.sideC && this.sideB !== this.sideA) ||
      (this.sideC === this.sideA && this.sideC !== this.sideB)
    ) {
      return 'Isosceles'
    } else {
      return 'Scalene'
    }
  }

  // finds an angle (specificed by sideNum)
  angle (sideNum: number): number {
    const aSqr = Math.pow(this.sideA, 2)
    const bSqr = Math.pow(this.sideB, 2)
    const cSqr = Math.pow(this.sideC, 2)
    if (sideNum === 1) {
      return Math.acos((bSqr + cSqr - aSqr) / (2 * this.sideB * this.sideC))
    } else if (sideNum === 2) {
      return Math.acos((aSqr + cSqr - bSqr) / (2 * this.sideA * this.sideC))
    } else if (sideNum === 3) {
      return Math.acos((aSqr + bSqr - cSqr) / (2 * this.sideA * this.sideB))
    } else {
      return 0
    }
  }

  // finds heights on each sides
  height (sideNum: number): number {
    if (sideNum === 1) {
      return (2 * this.area()) / this.sideA
    } else if (sideNum === 2) {
      return (2 * this.area()) / this.sideB
    } else if (sideNum === 3) {
      return (2 * this.area()) / this.sideC
    } else {
      return 0
    }
  }

  // finds the radius of the inner circle
  innerCircleRadius (): number {
    return this.area() / this.semiPerimeter()
  }

  // finds the radius of the circumsicle
  circumsicleRadius (): number {
    return (this.sideA * this.sideB * this.sideC) / (4 * this.area())
  }
}

export = Triangle
