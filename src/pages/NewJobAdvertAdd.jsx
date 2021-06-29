import React, { useEffect, useState } from 'react'
import { Formik, Form, useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from "react-router-dom";
import { Divider, Button, Card, Grid } from 'semantic-ui-react'
import HrmsTextInput from '../utilities/customFormControls/HrmsTextInput'
import HrmsDropdownMenu from '../utilities/customFormControls/HrmsDropdownMenu'
import HrmsDateMenu from '../utilities/customFormControls/HrmsDateMenu'
import HrmsTextAreaInput from '../utilities/customFormControls/HrmsTextAreaInput'
import JobAdvertService from '../Services/jobAdvertService';
import CityService from '../Services/cityService';
import JobPositionService from '../Services/jobPositionService'
import WorkPlaceService from '../Services/workPlaceService'
import WorkShiftService from '../Services/workShiftService'

export default function NewJobAdvertAdd() {

    let jobAdvertService = new JobAdvertService();

    const initialValues = useFormik({
        jobDescription: "",
        jobPosition: "",
        cityName: "",
        minSalary: "",
        maxSalary: "",
        vacantPosition: "",
        deadline: "",

    })

    const schema = Yup.object({
        jobDescription: Yup.string().required("Bu alanın doldurulması zorunludur!"),
        jobPosition: Yup.string().required("Bu alanın doldurulması zorunludur!"),
        cityName: Yup.string().required("Bu alanın doldurulması zorunludur!"),
        workPlace: Yup.string().required("Bu alanın girilmesi zorunludur"),
        workShift: Yup.string().required("Bu alanın girilmesi zorunludur"),
        minSalary: Yup.number().notRequired(),
        maxSalary: Yup.number().notRequired(),
        vacantPosition: Yup.number().min(1, "Pozisyon sayısı 1'den küçük olamaz!").required("Bu alanın doldurulması zorunludur!"),
        deadline: Yup.date().nullable().required("Lütfen son başvuru tarihini girin!")
    })

    const history = useHistory();

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([])
    const [workShifts, setWorkShifts] = useState([])


    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getAll().then(result => {
            setJobPositions(result.data.data)
        });
    }, []);

    useEffect(() => {
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();
        let workPlaceService = new WorkPlaceService();
        let workShiftService = new WorkShiftService();

        cityService.getAll().then((result) =>
            setCities(result.data.data)
        );
        jobPositionService.getAll().then((result) =>
            setJobPositions(result.data.data)
        );
        workPlaceService.getAll().then((result) =>
            setWorkPlaces(result.data.data)
        );
        workShiftService.getAll().then((result) =>
            setWorkShifts(result.data.data)
        );
    }, [])

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,
    }));

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id,
    }));

    const workPlaceOption = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.placeName,
        value: workPlace.id,
    }));

    const workShiftOption = workShifts.map((workShift, index) => ({
        key: index,
        text: workShift.shiftName,
        value: workShift.id,
    }));

    // const handleChangeSemantic = (value, fieldName) => {
    //     initialValues.setFieldValue(fieldName, value);
    // }



    return (


        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                values.employerId = 14;
                jobAdvertService.add(values).then((result) => console.log(result.data.data));
                alert("İş ilânı eklendi! Personelin onayının ardından listelenecektir.");
                history.push("/is-ilanlari")
            }}
        >
            <Card fluid>
                <Card.Content header='İş İlanı Ekle' />
                <Card.Content>
                    <Form className="ui form" onSubmit={initialValues.handleSubmit}>
                        <Divider />
                        <HrmsDropdownMenu name="position" placeholder="İş Pozisyonu" options={jobPositionOption} />
                        <HrmsDropdownMenu name="city" placeholder="Şehir" options={cityOption} />
                        <HrmsDropdownMenu name="workPlace" placeholder="Çalışma Yeri" options={workPlaceOption} />
                        <HrmsDropdownMenu name="workShift" placeholder="Çalışma Şekli" options={workShiftOption} />
                        <Grid stackable>
                            <Grid.Column width={8}>
                                <HrmsTextInput name="minSalary" placeholder="Taban Ücret" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <HrmsTextInput name="maxsalary" placeholder="Tavan Ücret" />
                            </Grid.Column>
                        </Grid>
                        <Grid stackable>
                            <Grid.Column width={8}>
                                <HrmsTextInput name="vacantPosition" placeholder="Açık Pozisyon Sayısı" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <HrmsDateMenu name="deadline" placeholder="Son Başvuru Tarihi" />
                            </Grid.Column>
                        </Grid>

                        <HrmsTextAreaInput name="description" placeholder="Açıklama" />
                        <Button
                            content="Ekle"
                            color="teal"
                            icon="add"
                            labelPosition="right"
                            type="submit" />
                    </Form>
                </Card.Content>
            </Card>
        </Formik>

    );
}
