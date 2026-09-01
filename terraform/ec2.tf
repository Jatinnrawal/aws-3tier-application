data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }

  filter {
    name   = "state"
    values = ["available"]
  }
}

resource "aws_instance" "backend" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = "t3.micro"
  subnet_id              = aws_subnet.private_a.id
  vpc_security_group_ids = [aws_security_group.backend.id]

  iam_instance_profile = aws_iam_instance_profile.ec2.name


  depends_on = [
  aws_iam_role_policy_attachment.ssm
  ]

  user_data = <<-EOF
              #!/bin/bash

              dnf update -y

              # Install Docker
              dnf install -y docker

              systemctl enable docker
              systemctl start docker

              usermod -aG docker ec2-user

              # Ensure SSM Agent is installed and running
              dnf install -y amazon-ssm-agent

              systemctl enable amazon-ssm-agent
              systemctl start amazon-ssm-agent
              EOF

  tags = {
    Name    = "${var.project_name}-backend"
    Project = var.project_name
  }
}
