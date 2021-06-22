import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from 'semantic-ui-react'
import { useFormik } from "formik";
import JobAdvertService from '../Services/jobAdvertService';
import * as Yup from "yup";
import CityService from '../Services/cityService';
import JobPositionService from '../Services/jobPositionService';
import { useHistory } from "react-router-dom";

export default function NewJobAdvert() {

    let jobAdvertService = new JobAdvertService();

    const JobAdvertAddSchema = Yup.object().shape({
        lastDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
        description: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        openPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1, "Pozisyon sayısı 1'den küçük olamaz"),
        cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        minSalary: Yup.number().min(0, "0'dan az olamaz").required("Bu alan zorunludur"),
        maxSalary: Yup.number().min(0, "0'dan az olamaz").required("Bu alan zorunludur")
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            description: "",
            jobPositionId: "",
            workTimeId: "",
            workPlaceId: "",
            openPositions: "",
            cityId: "",
            minSalary: "",
            maxSalary: "",
            lastDate: "",
        },
        validationSchema: JobAdvertAddSchema,
        onSubmit: (values) => {
            values.employerId = 4;
            jobAdvertService.add().then((result) => console.log(result.data.data));
            alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
            history.push("/jobads");
        },
    });


    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();

        cityService.getAll().then((result) => setCities(result.data.data));
        jobPositionService.getAll().then((result) => setJobPositions(result.data.data));
    }, []);


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

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }


    return (
        <div>
            
            <Card fluid>
                <Card.Content header='İş İlanı Ekle' />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <label>İş Pozisyonu</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="İş pozisyonu"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobPositionId")
                                }
                                onBlur={formik.onBlur}
                                id="jobPositionId"
                                value={formik.values.jobPositionId}
                                options={jobPositionOption}
                            />
                            {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobPositionId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Şehir</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Şehir"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityOption}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma Yeri</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Yeri"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workPlaceId")
                                }

                            />
                            {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workPlaceId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma Süresi</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Şekli"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workTimeId")
                                }

                            />

                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Taban Maaş</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MİNİMUM"
                                        value={formik.values.minSalary}
                                        name="minSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.minSalary && formik.touched.minSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.minSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Tavan Maaş</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MAKSİMUM"
                                        value={formik.values.maxSalary}
                                        name="maxSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.maxSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Açık Posisyon Sayısı</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        id="openPositions"
                                        name="openPositions"
                                        error={Boolean(formik.errors.openPositions)}
                                        onChange={formik.handleChange}
                                        value={formik.values.openPositions}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Posisyon sayısı"
                                    />
                                    {formik.errors.openPositions && formik.touched.openPositions && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.openPositions}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Son Başvuru Tarihi</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.lastDate)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "lastDate")
                                        }
                                        value={formik.values.lastDate}
                                        onBlur={formik.handleBlur}
                                        name="lastDate"
                                        placeholder="Son başvuru tarihi"
                                    />
                                    {formik.errors.lastDate && formik.touched.lastDate && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.lastDate}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Açıklama</label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.description).toString()}
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.description}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                           
                            content="Ekle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>

                </Card.Content>
            </Card>
        </div>
    )
}
