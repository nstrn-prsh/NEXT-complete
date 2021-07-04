const Child = () => {
     // g21
     useLayoutEffect(() => {
          console.log(`effect`);
     }, []);

     return <div>child</div>;
};

export default Child;
