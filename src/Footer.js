import { Box, Stack, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useCallback } from "react";
import { SocialIcon } from "react-social-icons";
import { MAX_WIDTH } from "./util/constants";

function Footer() {
  const theme = useTheme();
  const gotoElement = useCallback(() => {
    window.open(
      "https://matrix.to/#/%23polkagate:matrix.org",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <Grid id='contacts' container justifyContent="center" sx={{ px: { xs: 2, md: 4 }, py: { xs: 7, md: 9 }, color: theme.palette.text.primary, bgcolor: theme.palette.section.dark, position: 'inherit' }} >
      <Grid container justifyContent="center" sx={{ maxWidth: MAX_WIDTH }}>
        <Grid item xs={12}>
          <Box
            sx={{
              px: { xs: 2.5, md: 4 },
              py: { xs: 4, md: 5 },
              borderRadius: '30px',
              backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b',
              border: `1px solid ${theme.palette.divider}`,
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 32,
                px: 1.75,
                py: 0.625,
                borderRadius: '999px',
                border: `1px solid ${theme.palette.divider}`,
                color: theme.palette.primary.main,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2.25,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.06)' : 'rgba(231,49,136,0.12)',
              }}
            >
              Contact PolkaGate
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '30px', md: '42px' },
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                mb: 1.25,
              }}
            >
              Stay connected with the team
            </Typography>
            <Typography
              sx={{
                maxWidth: 680,
                mx: 'auto',
                color: theme.palette.text.secondary,
                fontSize: { xs: '15px', md: '17px' },
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Follow updates, reach out directly, or join the PolkaGate community through the channels below.
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1.25}
              flexWrap="wrap"
              useFlexGap
            >
              <SocialIcon
                bgColor={theme.palette.mode === 'light' ? '#1b1917' : 'white'}
                url="https://twitter.com/polkagate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 38, width: 38 }}
              />
              <SocialIcon
                bgColor={theme.palette.mode === 'light' ? '#1b1917' : 'white'}
                url="https://github.com/polkagate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 38, width: 38 }}
              />
              <SocialIcon
                bgColor={theme.palette.mode === 'light' ? '#1b1917' : 'white'}
                url="mailto:polkagate@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 38, width: 38 }}
              />
              <SocialIcon
                bgColor={theme.palette.mode === 'light' ? '#1b1917' : 'white'}
                url="https://t.me/polkagate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 38, width: 38 }}
              />
              <Box
                component="button"
                type="button"
                sx={{
                  height: 38,
                  width: 38,
                  borderRadius: '50%',
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  backgroundColor: theme.palette.mode === 'light' ? '#1b1917' : '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={gotoElement}
              >
                <Box
                  component="img"
                  sx={{
                    height: 18,
                    width: 18,
                    filter: theme.palette.mode === 'light' ? 'invert(1)' : 'none',
                  }}
                  alt="Element"
                  src="images/element.svg"
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ fontSize: 12, textAlign: "center", pt: '18px', color: theme.palette.text.secondary }}>
          © 2026 PolkaGate Foundation.{' '}
          <Link href='https://github.com/PolkaGate/polkagate-extension/blob/main/Privacy%20Policy.md' color="inherit" underline="hover" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(Footer);
