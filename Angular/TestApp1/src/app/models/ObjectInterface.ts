export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}

export enum Role {
  staff = "staff",
  student = "student",
  manager = "manager",
  admin = "admin"
}

export interface ObjectInterface {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: Address,
  role: Role,
  username: string,
  profilePhotoUrl: string,
  companies?: [Company, Company],
  gender: Gender.male | Gender.female | Gender.other
}


interface Address {
  city: string,
  street: string,
  postalCode: string
}

interface Company {
  id: number,
  name: string,
  description: string,
  location: Address
}
