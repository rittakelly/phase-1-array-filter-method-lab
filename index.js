// Code your solution here
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(array, string) {
    return array.filter(function (element) {
        return element.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (element) {
        return element.startsWith(string);
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name
    })
}