package com.hohieuluc.studentmanagementreact.application.security;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Component;

@Component
public class JsonWebTokenUtils {
    @Autowired
    JwtEncoder jwtEncoder;
    
    @Value("${jwt.lifetime}")
    Long jwtLifetime;

    public String generateToken (String sub) {
        Instant now = Instant.now();

        /* keep this */
        // String scope = authentication.getAuthorities().stream()
        // .map(GrantedAuthority::getAuthority)
        // .collect(Collectors.joining(" "));

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuedAt(now)
                .expiresAt(now.plusSeconds(jwtLifetime))
                .subject(sub)
                .build();
        return jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
}
