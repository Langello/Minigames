export default function Home() {
    const items = [
      {
        title: 'Memotest',
        link: './Memotest',
        imageUrl: 'https://i.ytimg.com/vi/xUwkGVin9-8/maxresdefault.jpg',
      },
      {
        title: 'Words per minute',
        link: './wpm',
        imageUrl: 'https://i0.wp.com/www.aptitude-test.com/blog/wp-content/uploads/2020/11/typing.jpg?resize=525%2C350&ssl=1',
      },
      {
        title: 'Pokemon',
        link: './Pokemon',
        imageUrl: 'https://cdn.suwalls.com/wallpapers/games/sleeping-pikachu-pokemon-51480-400x250.jpg',
      },
    ];
  
    return (
      <div>
        <h1 style={{margin:'35px', textAlign:'center'}}>Minigames</h1>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {items.map((item) => (
            <li key={item.title} style={{ margin: '0 10px', textAlign: 'center' }}>
              <h3 style={{ marginBottom:'15px',fontSize: '24px', textAlign: 'center' }}>{item.title}</h3>
              <a href={item.link}>
                <img src={item.imageUrl} alt="" style={{ width: '400px', height: '250px' , borderRadius:"15px"}} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  