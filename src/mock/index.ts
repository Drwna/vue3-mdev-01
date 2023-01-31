import user from './user';

export default [
  ...user,
  {
    url: '/api/mock/user/facadeuser/list',
    method: 'post',
    response: (request: any) => {
      const { page } = request.body;
      const total = 20;
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|10': [
            {
              index: `@increment(${page})`,
              orderNo: '@guid',
              amount: '@float(10, 1000, 2, 0)',
            },
          ],
          page,
          total,
        },
      };
    },
  },
  {
    url: '/api/mock/user/facadeuser/vote',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|3': [
            {
              avatarUrl: '@image(200x200, @color, @color, @word)',
              percentage: '@integer(1, 100)',
              text: '@cname(3, 5)',
              ticket: '@integer(1, 100)',
            },
          ],
        },
      };
    },
  },
  {
    url: '/api/mock/user/facadeuser/image',
    method: 'post',
    response: (request: any) => {
      const { page } = request.body;
      console.log('page', page);
      const total = 60;
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|10': [
            {
              id: '@id',
              name: '@ctitle(3, 5)',
              author: '@cname(3, 5)',
              price: '@float(10, 1000, 2, 0)',
              imgUrl: '@image(200x200, @color, @color, @word)',
              isCollect: '@boolean',
            },
          ],
          page,
          total,
        },
      };
    },
  },
  {
    url: '/api/mock/user/facadeuser/imageWish',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|12': [
            {
              id: '@id',
              name: '@ctitle(3, 5)',
              author: '@name(3, 5)',
              price: '@float(10, 1000, 2, 0)',
              desc: '@sentence(3, 5)',
              imgUrl: '@image(200x200, @color, @color, @word)',
              size: '@integer(20, 100)x@integer(20, 100)',
            },
          ],
        },
      };
    },
  },
];
