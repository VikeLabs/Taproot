
import React from 'react';
import { NavigationContainer, NavItem, ListNavItems } from '@keystone-6/core/admin-ui/components';
import type { NavigationProps } from '@keystone-6/core/admin-ui/components';
import { gql, useQuery } from '@apollo/client'


/**
 * This code is no longer being used. It was originally meant to generate a custom admin menu depending 
 * on the role of the user that was logged in. I have since discovered that this can be much more easily
 * done using the 'isHidden' ui option in the schema. 
 */


export function CustomNavigation({ authenticatedItem }: NavigationProps) {
  const EMPTY_MENU = (
    <NavigationContainer authenticatedItem={authenticatedItem}>
    </NavigationContainer>
  )
  if(authenticatedItem.state != 'authenticated'){
    return EMPTY_MENU;
  }
  
  // Create a query literal
  const USER_QUERY = gql`
    query GetUser($userId: ID){
      user(where: {id: $userId} ){
        name
        role{
          lists{
            key
          }
        }
      }
    }
  `;


  const LIST_QUERY = gql`
  query GetListData{
    keystone{
      adminMeta{
        lists{
          key
          path
          plural
        }
      }
    }
  }
  `

  
  // Execute the USER_QUERY and pass the current user's id as an argument  
  const { loading: user_loading, error: user_error, data: user_data } = useQuery(USER_QUERY, {
    variables: { userId: authenticatedItem.id },
  });  

  // Execute the LIST_QUERY. No arguments are needed for this one
  const { loading: list_loading, error: list_error, data: list_data } = useQuery(LIST_QUERY);  

  // Do something if loading
  if (user_loading){ console.log("loading") }

  // Do something if error
  if (user_error) { console.log(user_error.message) }
  if (list_error) { console.log(list_error.message) }
  
  // If our data was returned successfully for both queries
  if(user_data && list_data){

    // Assemble an array of objects with information about the lists that this user is allowed to see
    let listData = user_data.user.role.lists.map( (listItem: any) => ({
      key : listItem.key,
      path : list_data.keystone.adminMeta.lists.find((element: any) => (element.key === listItem.key)).path,
      plural : list_data.keystone.adminMeta.lists.find((element: any) => (element.key === listItem.key)).plural
    }));

    return (
      <NavigationContainer authenticatedItem={authenticatedItem}>
        { 
          listData.map( (listData:any) => (
              <NavItem href={listData.path} key={listData.key}>{listData.plural}</NavItem> 
            ))
        }
      </NavigationContainer>
    )
  }
  return EMPTY_MENU;  // Return the empty menu if something went wrong
}