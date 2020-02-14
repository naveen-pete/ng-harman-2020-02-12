import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

import { users, posts } from './data';

const getUser = (userName) => {
  return Observable.create((observer: Observer<any>) => {
    console.log('Observable implementation getUser() started.');
    setTimeout(function () {
      const user = users.find(function (u) {
        return u.name === userName;
      });

      if (!user) {
        observer.error('Could not find user.');
      } else {
        observer.next(user);
      }

    }, 3000);
  })
};

const getPosts = (userId) => {
  return Observable.create((observer: Observer<any>) => {
    console.log('getPosts() started.');
    setTimeout(() => {
      const postsForUser = posts.filter((p) => {
        return p.userId === userId;
      });

      if (postsForUser.length <= 0) {
        observer.error('Could not find posts for user');
      } else {
        observer.next(postsForUser);
      }

    }, 3000);
  });
};

export const doWork = () => {
  console.log('begin');

  getUser('hari')
    .pipe(
      // op1,
      // op2,
      // op3
      map((user: any) => {
        const newUser = { ...user, name: user.name.toUpperCase() };
        return newUser;
      })
    )
    .subscribe(
      (user: any) => {
        console.log('user:', user);
        getPosts(user.id).subscribe(
          (posts: any) => {
            console.log('posts for user:', posts);
          },
          (error) => {
            console.log('Error:', error);
          }
        );
      },
      (error) => {
        console.log('Error:', error);
      }
    );

  console.log('end');
};