export var users=[
    {
        uname:'angela',
        password:'kimi',
    },
    {
        uname:'allen',
        password:'deyb',
    },
    {
        uname:'christine',
        password:'cuti',
    },
    {
        uname:'watson',
        password:'0451',
    },
    {
        uname:'mark',
        password:'bonet',
    },
    {
        uname:'vhilly',
        password:'pogi',
    },
]
export var currentUser=users[0];
export function setCurrentUser(object){
    currentUser=object;
}