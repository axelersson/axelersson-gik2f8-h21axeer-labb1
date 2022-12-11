const BookImgDiv = (link, top, left, jamforBokAuth, jamforBokTitle) => {
     let html = `<div id=visadBild
                   class="bg-zinc-200 book-list__picture mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer absolute top-[${top}px] left-[${left}px ">
                   <img src="`

                   html +=link 
                   html +=`" alt="Kan inte hitta bild för aktuell titel" width="200" height="300"></img>
                    
                   ${jamforBokAuth} - ${jamforBokTitle}  
                </div>`;
     return html;
  };
  