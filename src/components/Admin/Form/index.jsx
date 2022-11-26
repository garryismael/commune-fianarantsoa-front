import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React from "react";

import "./index.css";

const AdminForm = (props) => {
  return (
    <div className="admin">
      <Card sx={{ width: "500px", margin: "auto" }}>
        <CardHeader title={props.title} />
        <CardContent>
          <form className="admin-form" onSubmit={props.handleSubmit}>
            <TextField
              id="nom"
              label="Nom"
              name="nom"
              value={props.values.nom}
              variant="outlined"
              onChange={props.onChange}
            />
            <TextField
              id="prenom"
              name="prenom"
              label="Prénoms"
              value={props.values.prenom}
              variant="outlined"
              onChange={props.onChange}
            />
            <TextField
              id="Email"
              name="email"
              label="Email"
              value={props.values.email}
              variant="outlined"
              onChange={props.onChange}
            />
            <TextField
              id="adresse"
              name="adresse"
              label="Adresse"
              value={props.values.adresse}
              variant="outlined"
              onChange={props.onChange}
            />
            <TextField
              id="contact"
              name="contact"
              label="Contact"
              value={props.values.contact}
              variant="outlined"
              onChange={props.onChange}
            />
            <FormControl>
              <FormLabel id="est_admin">Est admin?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="est_admin"
                name="est_admin"
                value={props.values.est_admin}
                onChange={props.onChange}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Oui"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Non"
                />
              </RadioGroup>
            </FormControl>
            {props.create && (
              <TextField
                id="mot_de_passe"
                name="mot_de_passe"
                label="Mot de passe"
                variant="outlined"
                onChange={props.onChange}
                type="password"
              />
            )}
            <Button variant="contained" className="button-form" type="submit">
              {props.button}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminForm;
