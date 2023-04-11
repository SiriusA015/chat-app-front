import { Box, Grid, Card } from "@mui/material";
import { useAppSelector } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router";

const HandleImageUpload = () => {

    const imageRef: any = useRef(null);
    const [defaultUserImage, setDefaultUserImage] = useState("/assets/img/blank/blank.png");
    const [selectedFile, setSelectedFile] = useState();

    const showOpenFileDialog = () => {
        imageRef.current.click();
    };
    const handleChange = (event: any) => {
        const file = event.target.files[0];
        console.log(`1: ${file}`)
        setSelectedFile(file);
        console.log(`2: ${selectedFile}`)
    };
    useEffect(() => {
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            console.log(`3: ${objectURL}`)
            setDefaultUserImage(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }
    }, [selectedFile]);

    return {
        imageRef,
        defaultUserImage,
        showOpenFileDialog,
        handleChange,
    };
};

export const PhotoList = () => {

    const navigate = useNavigate()

    const people = useAppSelector((state) => state.connectPeople.people);
    const {
        defaultUserImage,
        handleChange,
        imageRef,
        showOpenFileDialog,
    } = HandleImageUpload();
    const onSelectPeople = (index: any) => {
        return (
            navigate('/profile_unlocked', { state: people[index] })
        )
    }
    return (
        <><Box>
            <Grid container spacing={1} >
                {window.pageType === "CreateAccount" &&
                    people.map((user, index) => {
                        return (
                            <Grid key={index} item xs={12} lg={6} xl={4}>
                                <Card style={{ height: "100%", width: "100%" }}>
                                    <input type="image"
                                        src={defaultUserImage}
                                        alt='blank'
                                        style={{ maxWidth: "300px", width: "100%", height: "100%" }}
                                        onClick={showOpenFileDialog}
                                    />
                                    <input
                                        ref={imageRef}
                                        type="file"
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </Card>
                            </Grid>
                        )
                    })
                }
                {window.pageType !== "CreateAccount" &&
                    people.map((user, index) => {
                        return (
                            <Grid key={index} item xs={12} lg={6} xl={4}>
                                <Card style={{ height: "100%", width: "100%" }}>
                                    <input type="image"
                                        src={user.img}
                                        alt={user.alt}
                                        style={{ maxWidth: "300px", width: "100%", height: "100%" }}
                                        onClick={() => { onSelectPeople(index) }}
                                    />
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
        </>
    )
}