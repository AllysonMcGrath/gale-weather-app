import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }

`;

export const ADD_CITY = gql`
    mutation addCity($input: cityInput) {
        addCity(input: $input) {
            _id
            username
            savedCities {
                cityId
                cityName
            }
        }
    }
`;

export const REMOVE_CITY = gql `
    mutation removeCity($cityName: String!) {
        removeCity(cityName: $cityName) {
            _id
            username
            savedCity {
                cityId
                cityName
            }
        }
    }
`;