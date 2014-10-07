'use strict';

eventsApp.factory('eventData', function () {
  return {
    event: {
      name: 'Angular Boot Camp',
      eventDate: '1/1/2015',
      eventTime: '10:30 am',
      location: {
        address: '10 Google Drive',
        city: 'Mountain View',
        state: 'California'
      },
      imgPath: '/img/angularjs-large.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: 1,
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives!',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John doe',
          duration: 2,
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what the do',
          upVoteCount: 3
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: 4,
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular Does. Learn how to craft controllers that work.',
          upVoteCount: 0
        }
      ]
    }
  };
});