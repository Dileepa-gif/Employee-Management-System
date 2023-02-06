package com.example.springbootbackend.auth;



import com.example.springbootbackend.config.JwtService;
import com.example.springbootbackend.model.Admin;
import com.example.springbootbackend.model.Role;
import com.example.springbootbackend.repository.AdminRepository;
import com.example.springbootbackend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final AdminRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    var admin = Admin.builder()
        .firstName(request.getFirstName())
        .lastName(request.getLastName())
        .emailId(request.getEmailId())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.ADMIN)
        .build();
    repository.save(admin);
    var jwtToken = jwtService.generateToken(admin);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmailId(),
            request.getPassword()
        )
    );
    var admin = repository.findByEmailId(request.getEmailId())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(admin);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }
}
