import React from 'react'
import Cardtacs from '../Cardtacs'
import p1 from '../new/p1.jpg'
import p2 from '../new/p2.jpg'
import p3 from '../new/p3.jpg'
import p4 from '../new/p4.jpg'
import p5 from '../new/p5.jpg'
import p6 from '../new/p6.jpg'

const App = () => {
  return (
    <div>
       <div class="container text-center">
      <div  class="row ">
        <div class="col"><Cardtacs img={p1} title='Valantine Rossy' body='Designer' class='bg'/></div>
        <div class="col "> 
      <Cardtacs img={p2} title='Adam Jonson' body='Developer'/>
        
         </div>
        <div class="col">
        <Cardtacs img={p3} title='Tony Stark' body='Bussiness'/>

        </div>
        <div className='w-100'></div>
        <div class="col">
      <Cardtacs img={p4} title='Chris Evans' body='Designer'/>

        </div>
        <div class="col">
      <Cardtacs img={p5} title='Mark Buffalo' body='Designer'/>

        </div>
        <div class="col ">
      <Cardtacs img={p6} title='Natasha Romanov' body='Designer' class='bg'/>

          
        </div>
      </div>
    </div>
    
      
    </div>
  )
}

export default App
