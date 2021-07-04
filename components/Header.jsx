const Header = ({ title }) => {
     const background = "pink";

     return (
          <>
               <h1 className='title'>{title}</h1>
               <style jsx>
                    {`
                         .title {
                              color: red;
                         }
                         ,
                         h1 {
                              background: ${background};
                         }
                    `}
               </style>
          </>
     );
};

export default Header;
