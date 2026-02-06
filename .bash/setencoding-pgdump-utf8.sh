#!/bin/bash

PGCLIENTENCODING=UTF8 pg_dump -h 127.0.0.1 -p 5432 -U postgres -d postgres > database.sql

