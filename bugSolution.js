```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href, { scroll: false }); //use router.push() for navigation
  };

  return (
    <div>
      <button onClick={() => handleClick('/')}>Home</button>      
      <button onClick={() => handleClick('/about')}>About</button>    </div>
  );
}

export default MyComponent; 
```