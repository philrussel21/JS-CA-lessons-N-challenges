const request = require('supertest');
const { app, server } = require('../app')

// Handle the done() callback and force the NodeJS process to close
// as it hangs open forever when you do server-related stuff in Jest
// "afterAll" is a magic built-in Jest function that will run when
// all tests & test suites have finished running.
afterAll(async (done) => {
  // Force our server reference to close:
  await server.close();

  // Dumb hack to trick Jest into waiting a bit more before 
  // it freaks out over processes hanging open. 
  // Potentially because server.close() does not complete instantly? Not sure.
  // This has been an issue for ExpressJS & Jest devs 
  // for several years & solutions are vague.
  await new Promise(resolve => setTimeout(() => resolve(), 500));

  // Resolve the done() callback? Again not sure, as solutions are vague.
  done();
})




describe('Home page route exists', () => {
  it('Server homepage can be viewed', async (done) => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.statusCode).toEqual(200)

    done()
  })
})

describe('Books index page', () => {
  it('should have all the books', async (done) => {
    const expected = [{
      id: 1,
      name: 'IT',
      author: 'Stephen King',
      movie: true
    },
    {
      id: 2,
      name: 'Looking for Alaska',
      author: 'John Green',
      movie: false
    }]
    const res = await request(app).get('/books')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)
    done()
  });
});

describe('Books post page', () => {
  it('should include newly added books', async (done) => {
    const newBook = {
      name: 'Game of Thrones',
      author: 'George RR. Martin',
      movie: false
    }
    const expected = [{
      id: 1,
      name: 'IT',
      author: 'Stephen King',
      movie: true
    },
    {
      id: 2,
      name: 'Looking for Alaska',
      author: 'John Green',
      movie: false
    },
    {
      id: 3,
      ...newBook
    }]
    const res = await request(app)
      .post('/books')
      .send(newBook)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)

    done()
  });
});

describe('Books Show page', () => {
  it('should show particular book based on the url-provided id', async (done) => {
    const bookId = 2
    const expected = {
      id: 2,
      name: 'Looking for Alaska',
      author: 'John Green',
      movie: false
    }
    const res = await request(app).get(`/books/${bookId}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)
    done()
  });
});

describe('Books Update Page', () => {
  it('should update and show the particular book based on the url-provided id', async (done) => {
    const bookId = 2
    const updatedBook = {
      name: 'Abundance of Katherines',
      author: 'John Green',
      movie: false
    }
    const expected = {
      id: 2,
      name: 'Abundance of Katherines',
      author: 'John Green',
      movie: false
    }
    const res = await request(app)
      .put(`/books/${bookId}`)
      .send(updatedBook)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)
    done()
  });
})

describe('Books Delete Page', () => {
  it('should remove the selected book then show the rest of the books in the db', async (done) => {
    const bookId = 1
    const expected = [{
      id: 2,
      name: 'Abundance of Katherines',
      author: 'John Green',
      movie: false
    },
    {
      id: 3,
      name: 'Game of Thrones',
      author: 'George RR. Martin',
      movie: false
    }]
    const res = await request(app).delete(`/books/${bookId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)
    done()
  });
});