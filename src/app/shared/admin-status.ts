export interface pageItem {
  value: number;
  description: '2' | '25' | '50' | '100' | '250';
}

export const PAGE_ITEM: pageItem[] = [
  {
    value: 2,
    description: '2'
  },
  {
    value: 25,
    description: '25'
  },
  {
    value: 50,
    description: '50'
  },
  {
    value: 100,
    description: '100'
  },
  {
    value: 250,
    description: '250'
  }
];

export interface genderType {
  value: string;
  description: 'Female' | 'Male';
}

export const GENDER_TYPE: genderType[] = [
  {
    value: 'female',
    description: 'Female'
  },
  {
    value: 'male',
    description: 'Male'
  }
];

export interface bloodGroup {
  value: string;
  description: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'|'';
}

export const BLOOD_GROUP: bloodGroup[] = [
  {
    value: 'A+',
    description: 'A+'
  },
  {
    value: 'A-',
    description: 'A-'
  },
  {
    value: 'B+',
    description: 'B+'
  },
  {
    value: 'B-',
    description: 'B-'
  },
  {
    value: 'AB+',
    description: 'AB+'
  },
  {
    value: 'AB-',
    description: 'AB-'
  },
  {
    value: 'O+',
    description: 'O+'
  },
  {
    value: 'O-',
    description: 'O-'
  },
];

export interface employeeList {
  _id : string;
  name : string;
}

export interface assignedEmployee {
  _id : string
  projectId: {name : string , projectimage: string , _id : string}
  assignTo:any
}

export interface workingProfileType {
  value: string;
  description: 'Job' | 'Business';
}

export const WOKING_PROFILE_TYPE: workingProfileType[] = [
  {
    value: 'Job',
    description: 'Job'
  },
  {
    value: 'Business',
    description: 'Business'
  }
];