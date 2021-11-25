import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const results = [{ "timestamp": "24/11/2021 22:33:08", "title": "2021 Newest Dell Inspiron 5515 Touch Lap...", "price": "$1,029.00", "website": "amazon", "link": "www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09328651DRJSCF6QY9WN&url=%2FDell-5515-Touchscreen-i7-1065G7-Fingerprint%2Fdp%2FB098H2JNL4%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Ddell%26qid%3D1637811187%26sr%3D8-1-spons%26psc%3D1&qualifier=1637811187&id=6774722380455436&widgetName=sp_atf" }, { "timestamp": "24/11/2021 22:33:08", "title": "Dell Vostro 14 3400 Business Laptop Comp...", "price": "$1,389.00", "website": "amazon", "link": "www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02997633HO9OJMOS9HIO&url=%2FDell-14-3400-Anti-Glare-Quad-Core%2Fdp%2FB098NMVTJ1%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Ddell%26qid%3D1637811187%26sr%3D8-2-spons%26psc%3D1&qualifier=1637811187&id=6774722380455436&widgetName=sp_atf" }]
const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    pos: {
        marginBottom: 12
    }
});

export default function Results() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Timestamp</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Website</TableCell>
                        <TableCell align="center">Link</TableCell>
                    </TableRow>
                </TableHead>
                {results.map((row) => {
                    return (
                        <TableRow>
                            {console.log(row.link)}
                            <TableCell component="th" scope="row">
                                {row.timestamp}
                            </TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.website}</TableCell>
                            <TableCell align="center" component='a' href={row.link}>{'Link'}</TableCell>
                        </TableRow>
                    )
                })}
            </Table>
        </TableContainer >
    );
}