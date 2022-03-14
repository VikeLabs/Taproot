

// This type is defined just to let TypeScript know what a session is. 
// It doesn't actually effect the data passed to the following functions.
export type Session = {
  data: {
    name: string;
    role: { accessibleLists: [ { key: string } ] };
  }
}

// The question mark used in these functions 'session?.data' is a javascript feature called 'optional chaining'.
// It means the .data property will only be accessed if the session variable is non-null. You can learn more here:
// https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/

export const canAccessList = (session: Session, listKey:string) => {
  let accessibleListKeyObjects = session?.data.role.accessibleLists;
  for(let i = 0; i < accessibleListKeyObjects.length; i++){
    if(accessibleListKeyObjects[i].key == listKey){
      return true;
    }
  }
  return false;
}