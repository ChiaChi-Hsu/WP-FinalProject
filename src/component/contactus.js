import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import {db} from '../firebase';
import {useState} from 'react';

const Contactus = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [comment,setComment]=useState("");

    const [loader,setLoader]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true)

        db.collection('contacts')
            .add({
                name:name,
                email:email,
                comment:comment,
            })
            .then(()=>{
                alert('Comment has been submitted👍👍👍');
                setLoader(false);
            })
            .catch(error=>{
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setComment("");
    };


    return(
        <div class="Container Contactus-background">

        <div class="row justify-content-center align-items-center text-center">
            <div class="col-4 justify-content-start align-items-start text-start">
                <div class="col-6 Contactinfo">
                    <p class="fw-bold h3">𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝕴𝖓𝖋𝖔</p>
                    <LocalPhoneIcon></LocalPhoneIcon><b> Phone</b>
                    <h6>𝟬𝟯-𝟮𝟭𝟭𝟴𝟴𝟬𝟬</h6>
                    <EmailIcon></EmailIcon><b> Email</b>
                    <h6>𝗨𝗖𝗖𝗖@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺</h6>
                </div>
            </div>

                <form class="col-8 form Contactus-header" classname="form" onSubmit={handleSubmit}>
                    <p class="display-4 fw-bold text-warning h1">✉️Ċöńẗäċẗ Üṩ✉️</p>
                    <div class="text-end fst-italic"><p class="h6">Please fill out the form below to send us an email<br></br> and we will
                  get back to you as soon as possible.</p></div>
                    <br></br>
                    <div class="col-7">
                        <label for="name" class="form-label form-control-lg">NickName</label>
                        <input type="text" 
                               class="form-control" 
                               id="name" 
                               placeholder="𝓎𝑜𝓊𝓇 𝓃𝒾𝒸𝓀𝓃𝒶𝓂𝑒" 
                               value={name} 
                               onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div class="col-7">
                        <label for="email" class="form-label form-control-lg">Email Address</label>
                            <input type="email" 
                                   class="form-control" 
                                   id="email" 
                                   placeholder="𝓃𝒶𝓂𝑒@𝑒𝓍𝒶𝓂𝓅𝓁𝑒.𝒸𝑜𝓂"
                                   value={email} 
                                   onChange={(e)=>setEmail(e.target.value)}
                            />
                                       
                    </div>
                    <div class="col-7">
                        <label for="comment" class="form-label form-control-lg">Comment</label>
                            <textarea class="form-control" 
                                      id="comment" 
                                      rows="6" 
                                      placeholder="𝓌𝓇𝒾𝓉𝑒 𝓈𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔 𝓉𝑜 𝓊𝓈"
                                      value={comment} 
                                      onChange={(e)=>setComment(e.target.value)}
                            >
                            </textarea>
                    </div>

                    <br></br>
                    <button type="submit" 
                            class="btn btn-outline-light" 
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"
                            style={{background : loader ? "#ccc" : "rgb(2, 2, 110)"}}
                    >   
                        Submit
                    </button>
                </form>
  
        </div>
        </div>
    );
} 

export default Contactus;
