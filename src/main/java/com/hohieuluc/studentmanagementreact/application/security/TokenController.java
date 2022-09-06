package com.hohieuluc.studentmanagementreact.application.security;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * A controller for the token resource.
 *
 * @author Josh Cummings
 */
@RestController
public class TokenController {

    @Autowired
    JwtEncoder encoder;

    @PostMapping("/token")
    public String token(/* Authentication authentication */) {
        Instant now = Instant.now();
        long expiry = 36000L;
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("test", "hahaha");
        params.put("test2", "hahaha2");
        // @formatter:off
		// String scope = authentication.getAuthorities().stream()
		// 		.map(GrantedAuthority::getAuthority)
		// 		.collect(Collectors.joining(" "));
		JwtClaimsSet claims = JwtClaimsSet.builder()
                .claim("data", params)
				.issuer("self")
				.issuedAt(now)
				.expiresAt(now.plusSeconds(expiry))
				.subject("fahfhahfhahf")
				.build();
		// @formatter:on
        return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
}
